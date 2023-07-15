import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import { resolve } from "path"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
    plugins: [pugPlugin(options, locals)],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                blog: resolve(__dirname, 'blog.html'),
                catalog: resolve(__dirname, 'catalog.html'),
                contacts: resolve(__dirname, 'contacts.html'),
                offer: resolve(__dirname, 'offer.html'),
                page: resolve(__dirname, 'page.html'),
                partners: resolve(__dirname, 'partners.html'),
                pharma: resolve(__dirname, 'pharma.html'),
                product: resolve(__dirname, 'product.html'),
                publications: resolve(__dirname, 'publications.html'),
                vacancies: resolve(__dirname, 'vacancies.html'),
                vacancy: resolve(__dirname, 'vacancy.html'),
            },
        },
    },
})
