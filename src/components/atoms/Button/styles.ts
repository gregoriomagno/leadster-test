/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, {css} from 'styled-components';
import {ButtonProps, ThemeButton} from '.';
import {shade, transparentize} from 'polished';
import theme from '../../../styles/theme';


type WrapperProps = Pick<ButtonProps, 'typeButton' | 'themeButton' >;

const modifiersTheme = {
	primary: {
		main: theme.colors.blue,
		secondary: theme.colors.white,
	},
	black:{
		main: theme.colors.black,
		secondary: theme.colors.white,
		
	}
	
};

const modifiers = {
	flat: (themeButton: ThemeButton) => css`
		background: ${modifiersTheme[themeButton!].main};
		color: ${modifiersTheme[themeButton!].secondary};

		transition: background 0.2s ease;

		&:not(.hover-disable):hover{
			background:${modifiersTheme[themeButton!].secondary};
			color:${modifiersTheme[themeButton!].main} ;
			border: solid 1px ${modifiersTheme[themeButton!].main};

		}

	`,
	ghost: (themeButton: ThemeButton) => css`
		background: transparent;
		color: ${modifiersTheme[themeButton!].main};
		border: 1px solid ${modifiersTheme[themeButton!].main};

		transition: background 0.2s ease;

		&:not(.hover-disable):hover{
			border: 1px solid ${theme.colors.blue};
			color: ${theme.colors.blue};
			background:${modifiersTheme[themeButton!].secondary};
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
