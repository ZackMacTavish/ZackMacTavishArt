# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Composition flipbook

The Composition page uses three PDFs in this order: front cover, interior pages, and back cover. Prepare replacement files with:

```sh
npm run prepare-flipbook -- \
	--cover ~/Downloads/Bookcover.pdf \
	--content ~/Downloads/Bookcontent.pdf \
	--back ~/Downloads/Bookend.pdf \
	--output public/composition-book \
	--inner-trim 12
```

The script renders each PDF page, removes the 21-point printer margin from every edge, writes optimized AVIF pages, and creates `manifest.json` for the React viewer. Use `--trim-inset 0` when PDFs already use their finished trim box, or pass another point value when crop marks differ. The optional `--scale` setting defaults to `2.5`. `--inner-trim 12` removes the inner binding allowance from alternating page edges, producing the finished page dimensions without padding, duplicated seams, or stretched image edges. One-off corrections can use `--edge-fixes page:edge:points`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
