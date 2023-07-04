/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, {css} from 'styled-components';
import {ButtonProps, ThemeButton, TypesButton} from '.';
import {shade, transparentize} from 'polished';
import theme from '../../../styles/theme';


type WrapperProps = Pick<ButtonProps, 'typeButton' | 'themeButton' >;

const modifiersTheme = {
	primary: {
		main: theme.colors.blue,
		secondary: theme.colors.white,
	}
	
};

const modifiers = {
	flat: (themeButton: ThemeButton) => css`
		background: ${modifiersTheme[themeButton!].main};
		color: ${modifiersTheme[themeButton!].secondary};

		transition: background 0.2s ease;

		&:hover {
			background:${modifiersTheme[themeButton!].secondary};
			color:${modifiersTheme[themeButton!].main} ;
			border: solid 2px ${modifiersTheme[themeButton!].main};

		}

	`,
	ghost: (themeButton: ThemeButton) => css`
		background: transparent;
		color: ${modifiersTheme[themeButton!].main};
		border: 2px solid ${modifiersTheme[themeButton!].main};

		transition: background 0.2s ease;

		&:hover {
			background: ${transparentize(0.95, modifiersTheme[themeButton!].main)};
		}

		&:active {
			background: transparent;
		}

	`,
};


export const Wrapper = styled.button<WrapperProps>`
	${({typeButton, themeButton}) => css`
		border: none;
		cursor: pointer;
		width: fit-content;
		border-radius: 6.4rem;
		height: 48px;

		display: flex;
		align-items: center;

		text-decoration: none;
		span{
			font-weight: 600;
		}
		

		justify-content: center;
		padding: 1.4rem 2rem;

		${modifiers[typeButton!](themeButton!)}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	`}
`;
