/**
 * @file template-processor.js
 * @summary Fills {{key}} placeholders in a template string using a dictionary.
 * @author Group 18
 * @updated Sep. 13, 2025,
 */

'use strict';

// Handles template strings with {{key}} placeholders
// and replaces them with values from a dictionary.
class TemplateProcessor {

    // Save the template string.
    constructor(template) {
        // Make sure that template is, in fact, a string.
        this.template = String(template);
    }

    // Fill in the template with values from the dictionary.
    fillIn(dictionary = {}) {
        return this.template.replace(/{{\s*([^{}]+?)\s*}}/g, (_m, key) => {
            const prop = key.trim();

            // If the key exists, use its value (or "" if null/undefined).
            // If it doesn’t exist, use "".
            if (Object.prototype.hasOwnProperty.call(dictionary, prop)) {
                const val = dictionary[prop];
                return val == null ? "" : String(val);
            }
            return "";
        });
    }
}
