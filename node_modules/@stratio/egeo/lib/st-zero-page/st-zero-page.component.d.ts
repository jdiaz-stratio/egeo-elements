/**
 * @description {Component} [Zero Page]
 *
 * Zero page is displayed when there are no results to show in a table
 *
 * @example
 *
 * {html}
 *
 * ```
 *      <st-zero-page class="zero-page-example"
 *      title="There are no Variables created yet "
 *      info="Variables help you to have consistent values through your Quality Rules, Attributes…"
 *      imageSource="assets/images/variable-icon.svg">
 *      </st-zero-page>
 * ```
 */
export declare class StZeroPageComponent {
    /** @Input {string} [title=''] Title message */
    title: string;
    /** @Input {string} [info=''] Info message */
    info: string;
    /** @Input {string} [imageSource=''] Image source path */
    imageSource: string;
}
