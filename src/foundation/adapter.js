// Adapter for integrating with @zackmactavish/foundation when available,
// while providing safe fallbacks to local implementations.
import React from 'react'
import { Seo as FoundationSeo, Grid60 as FoundationGrid60 } from '@zackmactavish/foundation'
import styled from 'styled-components'
import SEOFallback from '../components/SEO/SEO.jsx'

// Export a common SEO component
export const Seo = FoundationSeo || SEOFallback

export const Grid60 = FoundationGrid60 || null

const SPLIT_SIZE_PRESETS = {
	default: {},
	medium: {
		rootWidth: '86vw',
		rootMaxWidth: '1120px',
		rootWidthLg: '88vw',
		rootMaxWidthLg: '1080px',
		rootColumns: 'minmax(0, 1.02fr) minmax(300px, 0.98fr)',
		rootColumnsLg: 'minmax(0, 1fr) minmax(280px, 1fr)',
		rootGap: 'clamp(20px, 2vw, 32px)',
		rootMobileGap: '1.15rem',
		mediaMaxWidth: '580px',
		mediaMaxWidthLg: '540px',
		mobilePictureWidth: '96vw',
		mobileImageMaxWidth: '96vw',
		textSize: 'clamp(1.04rem, 1.18vw, 1.26rem)',
		textMobileSize: '1.18rem',
		textMaxWidth: '420px',
	},
	wide: {
		rootWidth: '90vw',
		rootMaxWidth: '1260px',
		rootWidthLg: '92vw',
		rootMaxWidthLg: '1180px',
		rootColumns: 'minmax(0, 1.08fr) minmax(320px, 0.92fr)',
		rootColumnsLg: 'minmax(0, 1.04fr) minmax(300px, 0.96fr)',
		rootGap: 'clamp(24px, 2.2vw, 40px)',
		rootMobileGap: '1.25rem',
		mediaMaxWidth: '640px',
		mediaMaxWidthLg: '600px',
		mobilePictureWidth: '96vw',
		mobileImageMaxWidth: '96vw',
		textSize: 'clamp(1.08rem, 1.25vw, 1.3rem)',
		textMobileSize: '1.2rem',
		textMaxWidth: '470px',
	},
	compact: {
		rootWidth: '82vw',
		rootMaxWidth: '1120px',
		rootWidthLg: '86vw',
		rootMaxWidthLg: '1040px',
		rootColumns: 'minmax(0, 1.05fr) minmax(240px, 0.9fr)',
		rootColumnsLg: 'minmax(0, 1fr) minmax(220px, 0.95fr)',
		rootGap: 'clamp(18px, 1.8vw, 32px)',
		rootMobileGap: '1rem',
		mediaMaxWidth: '560px',
		mediaMaxWidthLg: '520px',
		mobilePictureWidth: '96vw',
		mobileImageMaxWidth: '96vw',
		textSize: 'clamp(1.02rem, 1.2vw, 1.25rem)',
		textMobileSize: '1.2rem',
		textMaxWidth: '380px',
	},
}

const SplitRoot = styled.div`
	width: min(${props => props.$width || '88vw'}, ${props => props.$maxWidth || '1180px'});
	margin: 0 auto;
	display: grid;
	grid-template-columns: ${props => props.$columns || 'minmax(0, 1.2fr) minmax(280px, 0.78fr)'};
	gap: ${props => props.$gap || 'clamp(36px, 3vw, 56px)'};
	align-items: center;
	padding: clamp(1.75rem, 2.6vw, 2.1rem) 0;

	@media (max-width: 1320px) {
		width: min(${props => props.$widthLg || props.$width || '90vw'}, ${props => props.$maxWidthLg || '1080px'});
		grid-template-columns: ${props => props.$columnsLg || props.$columns || 'minmax(0, 1.1fr) minmax(260px, 0.82fr)'};
	}

	@media (max-width: 900px) {
		width: 100vw;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		gap: ${props => props.$mobileGap || '1.5rem'};
		align-items: center;
		content-visibility: auto;
		contain-intrinsic-size: 900px;
	}
`

const SplitMedia = styled.div`
	width: 100%;
	max-width: ${props => props.$mediaMaxWidth || '680px'};
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
		max-width: ${props => props.$mediaMaxWidthLg || props.$mediaMaxWidth || '600px'};

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
			width: ${props => props.$mobilePictureWidth || '92vw'};
			margin: 0 auto;
			padding: ${props => (props.$imageMode === 'framed' ? '18px 14px' : '0')};
		}

		img {
			width: ${props => (props.$imageMode === 'framed' ? 'auto' : '100%')};
			max-width: ${props => props.$mobileImageMaxWidth || props.$mobilePictureWidth || '92vw'};
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
	max-width: ${props => props.$textMaxWidth || '420px'};
	justify-self: start;

	@media (max-width: 900px) {
		font-size: ${props => props.$mobileTextSize || '1.7rem'};
		width: ${props => props.$mobileTextWidth || '92vw'};
		max-width: none;
		margin: 0 auto;
		min-height: 40px;
	}
`

export function ImageTextSplit({
	imageSrc,
	imageAvif,
	imageAvifSet,
	imageWebp,
	imageWebpSet,
	imageAlt,
	imageWidth,
	imageHeight,
	imageSizes,
	imageLoading = 'lazy',
	imageDecoding = 'async',
	imageFetchPriority,
	children,
	width,
	imageMaxHeight,
	imageMode,
	imageBlendMode,
	textSize,
	textColor,
	splitSize = 'default',
	className,
	...rest
}) {
	const sizePreset = SPLIT_SIZE_PRESETS[splitSize] || SPLIT_SIZE_PRESETS.default
	const resolvedTextSize = textSize || sizePreset.textSize
	const resolvedTextColor = textColor || sizePreset.textColor

	return React.createElement(
		SplitRoot,
		{
			$width: width || sizePreset.rootWidth,
			$maxWidth: sizePreset.rootMaxWidth,
			$widthLg: sizePreset.rootWidthLg,
			$maxWidthLg: sizePreset.rootMaxWidthLg,
			$columns: sizePreset.rootColumns,
			$columnsLg: sizePreset.rootColumnsLg,
			$gap: sizePreset.rootGap,
			$mobileGap: sizePreset.rootMobileGap,
			className,
			...rest,
		},
		React.createElement(
			SplitMedia,
			{
				$imageMaxHeight: imageMaxHeight || sizePreset.imageMaxHeight,
				$imageMode: imageMode,
				$imageBlendMode: imageBlendMode,
				$mediaMaxWidth: sizePreset.mediaMaxWidth,
				$mediaMaxWidthLg: sizePreset.mediaMaxWidthLg,
				$mobilePictureWidth: sizePreset.mobilePictureWidth,
				$mobileImageMaxWidth: sizePreset.mobileImageMaxWidth,
			},
			React.createElement(
				'picture',
				null,
				(imageAvif || imageAvifSet)
					? React.createElement('source', { srcSet: imageAvifSet || imageAvif, sizes: imageSizes, type: 'image/avif' })
					: null,
				(imageWebp || imageWebpSet)
					? React.createElement('source', { srcSet: imageWebpSet || imageWebp, sizes: imageSizes, type: 'image/webp' })
					: null,
				React.createElement('img', {
					src: imageSrc,
					alt: imageAlt,
					width: imageWidth,
					height: imageHeight,
					sizes: imageSizes,
					loading: imageLoading,
					decoding: imageDecoding,
					fetchPriority: imageFetchPriority,
				})
			)
		),
		React.createElement(
			SplitText,
			{
				$textSize: resolvedTextSize,
				$textColor: resolvedTextColor,
				$textMaxWidth: sizePreset.textMaxWidth,
				$mobileTextSize: sizePreset.textMobileSize,
				$mobileTextWidth: sizePreset.mobileTextWidth,
			},
			children
		)
	)
}
