/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MxButton {
        "btnType": string;
        "disabled": boolean;
        "full": boolean;
        "href": string;
        "iconLeft": string;
        "target": string;
        "type": string;
        "value": string;
        "xl": boolean;
    }
    interface MxCheckbox {
        "checked": boolean;
        "identifier": string;
        "labelName": string;
        "name": string;
        "value": string;
    }
    interface MxInput {
        "assistiveText": string;
        "dense": boolean;
        "error": boolean;
        "isActive": boolean;
        "isFocused": boolean;
        "label": string;
        "labelClass": string;
        "leftIcon": string;
        "name": string;
        "outerContainerClass": string;
        "rightIcon": string;
        "textarea": boolean;
        "textareaHeight": string;
        "type": string;
        "value": string;
    }
    interface MxRadio {
        "checked": boolean;
        "identifier": string;
        "labelName": string;
        "name": string;
        "value": string;
    }
    interface MxSwitch {
        "checked": boolean;
        "identifier": string;
        "labelName": string;
        "name": string;
        "value": string;
    }
}
declare global {
    interface HTMLMxButtonElement extends Components.MxButton, HTMLStencilElement {
    }
    var HTMLMxButtonElement: {
        prototype: HTMLMxButtonElement;
        new (): HTMLMxButtonElement;
    };
    interface HTMLMxCheckboxElement extends Components.MxCheckbox, HTMLStencilElement {
    }
    var HTMLMxCheckboxElement: {
        prototype: HTMLMxCheckboxElement;
        new (): HTMLMxCheckboxElement;
    };
    interface HTMLMxInputElement extends Components.MxInput, HTMLStencilElement {
    }
    var HTMLMxInputElement: {
        prototype: HTMLMxInputElement;
        new (): HTMLMxInputElement;
    };
    interface HTMLMxRadioElement extends Components.MxRadio, HTMLStencilElement {
    }
    var HTMLMxRadioElement: {
        prototype: HTMLMxRadioElement;
        new (): HTMLMxRadioElement;
    };
    interface HTMLMxSwitchElement extends Components.MxSwitch, HTMLStencilElement {
    }
    var HTMLMxSwitchElement: {
        prototype: HTMLMxSwitchElement;
        new (): HTMLMxSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "mx-button": HTMLMxButtonElement;
        "mx-checkbox": HTMLMxCheckboxElement;
        "mx-input": HTMLMxInputElement;
        "mx-radio": HTMLMxRadioElement;
        "mx-switch": HTMLMxSwitchElement;
    }
}
declare namespace LocalJSX {
    interface MxButton {
        "btnType"?: string;
        "disabled"?: boolean;
        "full"?: boolean;
        "href"?: string;
        "iconLeft"?: string;
        "target"?: string;
        "type"?: string;
        "value"?: string;
        "xl"?: boolean;
    }
    interface MxCheckbox {
        "checked"?: boolean;
        "identifier"?: string;
        "labelName"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface MxInput {
        "assistiveText"?: string;
        "dense"?: boolean;
        "error"?: boolean;
        "isActive"?: boolean;
        "isFocused"?: boolean;
        "label"?: string;
        "labelClass"?: string;
        "leftIcon"?: string;
        "name"?: string;
        "outerContainerClass"?: string;
        "rightIcon"?: string;
        "textarea"?: boolean;
        "textareaHeight"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface MxRadio {
        "checked"?: boolean;
        "identifier"?: string;
        "labelName"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface MxSwitch {
        "checked"?: boolean;
        "identifier"?: string;
        "labelName"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "mx-button": MxButton;
        "mx-checkbox": MxCheckbox;
        "mx-input": MxInput;
        "mx-radio": MxRadio;
        "mx-switch": MxSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mx-button": LocalJSX.MxButton & JSXBase.HTMLAttributes<HTMLMxButtonElement>;
            "mx-checkbox": LocalJSX.MxCheckbox & JSXBase.HTMLAttributes<HTMLMxCheckboxElement>;
            "mx-input": LocalJSX.MxInput & JSXBase.HTMLAttributes<HTMLMxInputElement>;
            "mx-radio": LocalJSX.MxRadio & JSXBase.HTMLAttributes<HTMLMxRadioElement>;
            "mx-switch": LocalJSX.MxSwitch & JSXBase.HTMLAttributes<HTMLMxSwitchElement>;
        }
    }
}
