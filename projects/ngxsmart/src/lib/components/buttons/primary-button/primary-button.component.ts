import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'primary-button',
	standalone: true,
	imports: [MatButtonModule, MatIconModule],
	template: `
		<button
			class="btn btn-primary primary-button {{ loading || disabled ? 'disabled' : '' }}"
			mat-raised-button
			type="{{ type }}"
			data-cy="primary-button">
			@if(loading){
			<span aria-hidden="true" class="spinner-border spinner-border-sm" role="status"></span>
			} @if(!loading && showIcon){
			<mat-icon>{{ icon }}</mat-icon>
			}
			{{ loading ? loadingLabel : label }}
		</button>
	`,
	styleUrls: ['../../../../assets/app-buttons.css'],
})
export class PrimaryButtonComponent {
	/**
	 *  Is search in progress and loading the data
	 */
	@Input() loading: boolean | undefined = false;

	/**
	 *  Is button disabled, default is false
	 */
	@Input() disabled = false;

	/**
	 * Type of the button. Following values are supported. See BootStrap docs for more information
	 * <pre>
	 *   1. button
	 *   2. submit
	 * </pre>
	 */
	@Input() type = 'button';

	/**
	 * If set, shows when search in progress
	 */
	@Input() loadingLabel = 'Saving...';

	/**
	 * If set, shows when search is not in progress
	 */
	@Input() label = 'Save';

	/**
	 * If set, shows material icon
	 */
	@Input() icon = 'save';

	/**
	 * If set, shows material icon otherwise hides the icons
	 */
	@Input() showIcon = false;
}
