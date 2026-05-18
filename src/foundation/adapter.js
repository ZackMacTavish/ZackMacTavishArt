// Adapter for integrating with @zackmactavish/foundation when available,
// while providing safe fallbacks to local implementations.
import React from 'react'
import * as Foundation from '@zackmactavish/foundation'
import styled from 'styled-components'
import SEOFallback from '../components/SEO/SEO.jsx'

// Export a common SEO component
export const Seo = Foundation['Seo'] || Foundation['SEO'] || Foundation['Meta'] || SEOFallback

// Themes: prefer foundation tokens if present
export const lightThemeFromFoundation = Foundation['lightTheme'] || Foundation['LightTheme'] || null
export const darkThemeFromFoundation = Foundation['darkTheme'] || Foundation['DarkTheme'] || null
export const GlobalStylesFromFoundation = Foundation['GlobalStyles'] || Foundation['globalStyles'] || null

// Optional custom cursor from foundation
export const CustomCursorFromFoundation = Foundation['CustomCursor'] || Foundation['Cursor'] || null

// Helper to read site defaults if provided by foundation
export const siteDefaults = Foundation['siteDefaults'] || {}

export const Grid60 = Foundation['Grid60'] || Foundation['Grid'] || null

const SplitRoot = styled.div`
	width: min(${props => props.$width || '88vw'}, 1180px);
	margin: 0 auto;
	display: grid;
	grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.78fr);
	gap: clamp(36px, 3vw, 56px);
	align-items: center;
	padding: clamp(1.75rem, 2.6vw, 2.1rem) 0;

	@media (max-width: 1320px) {
		width: min(${props => props.$width || '90vw'}, 1080px);
		grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.82fr);
	}

	@media (max-width: 900px) {
		width: 100vw;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
	}
`

const SplitMedia = styled.div`
	width: 100%;
	max-width: 680px;
	min-width: 0;
	min-height: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-self: end;

	picture {
		display: block;
		width: 100%;
		position: relative;
		isolation: ${props => (props.$imageBlendMode ? 'isolate' : 'auto')};
		border-radius: 24px;
		background: ${props => (props.$imageMode === 'framed' ? '#ececec' : 'transparent')};
		padding: ${props => (props.$imageMode === 'framed' ? 'clamp(24px, 3vw, 40px) clamp(18px, 2vw, 26px)' : '0')};
		box-sizing: border-box;
		overflow: hidden;
	}

	img {
		width: ${props => (props.$imageMode === 'framed' ? 'auto' : '100%')};
		max-width: 100%;
		max-height: ${props => props.$imageMaxHeight || '600px'};
		min-width: 0;
		height: auto;
		min-height: 200px;
		object-fit: ${props => (props.$imageMode === 'framed' ? 'contain' : 'cover')};
		display: block;
		position: relative;
		z-index: ${props => (props.$imageBlendMode ? '1' : 'auto')};
		margin: 0 auto;
		border-radius: 24px;
		box-shadow: ${props => (props.$imageMode === 'framed' ? 'none' : '0 2px 12px 0 rgba(0,0,0,0.06)')};
		mix-blend-mode: ${props => props.$imageBlendMode || 'normal'};
		overflow: hidden;
	}

	@media (max-width: 1200px) {
		max-width: 600px;

		img {
			min-height: 140px;
		}
	}

	@media (max-width: 900px) {
		width: 100vw;
		max-width: none;
		justify-content: center;
		justify-self: stretch;
		margin-bottom: 1.2rem;

		picture {
			width: 92vw;
			margin: 0 auto;
			padding: ${props => (props.$imageMode === 'framed' ? '18px 14px' : '0')};
		}

		img {
			width: ${props => (props.$imageMode === 'framed' ? 'auto' : '100%')};
			max-width: 92vw;
			max-height: none;
			min-height: 120px;
			border-radius: 16px;
		}
	}
`

const SplitText = styled.div`
	font-family: 'Space Grotesk', sans-serif;
	font-size: ${props => props.$textSize || '1.4rem'};
	color: ${props => props.$textColor || '#fff'};
	line-height: 1.4;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	gap: 0.25em;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
	min-width: 0;
	height: 100%;
	max-width: 420px;
	justify-self: start;

	@media (max-width: 900px) {
		font-size: 1.7rem;
		width: 92vw;
		max-width: none;
		margin: 0 auto;
		min-height: 40px;
	}
`

export function ImageTextSplit({
	imageSrc,
	imageAvif,
	imageWebp,
	imageAlt,
	children,
	width,
	imageMaxHeight,
	imageMode,
	imageBlendMode,
	textSize,
	textColor,
	className,
	...rest
}) {
	return React.createElement(
		SplitRoot,
		{ $width: width, className, ...rest },
		React.createElement(
			SplitMedia,
			{ $imageMaxHeight: imageMaxHeight, $imageMode: imageMode, $imageBlendMode: imageBlendMode },
			React.createElement(
				'picture',
				null,
				imageAvif ? React.createElement('source', { srcSet: imageAvif, type: 'image/avif' }) : null,
				imageWebp ? React.createElement('source', { srcSet: imageWebp, type: 'image/webp' }) : null,
				React.createElement('img', { src: imageSrc, alt: imageAlt })
			)
		),
		React.createElement(SplitText, { $textSize: textSize, $textColor: textColor }, children)
	)
}
