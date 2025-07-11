import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://aimpacts.de',
    server: {
        port: 4321,
        host: true
    }
});