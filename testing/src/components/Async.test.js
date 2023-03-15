import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe('Async Component', () => {
    test('Renders posts if request succeeds', async ()=>{

        // Arrange       

        // Override the fetch function so that we aren't making legitemate calls to an API
        window.fetch = jest.fn() // jest.fn() is a dummy function provided by jest

        // We return an object with a json key, that holds an async function that returns a list -> because thats what a fetch function returns.
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}] 
        })

        render(<Async/>)

        // Act

        // Assert

        // get queries will scan for list items IMMEDIATELY! Which is an issue as it may take time to populat the list.
        // So we use 'find', as that returns a promise (the third argument allows you to set a timeout)
        const listItems = await screen.findAllByRole('listitem') 
        expect(listItems).not.toHaveLength(0)
    })
})