import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import react from "@vitejs/plugin-react-swc";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Icons({
            /* options */
            autoInstall: true,
        }),
    ],
});
