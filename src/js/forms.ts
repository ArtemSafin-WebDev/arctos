import Validator from "./classes/Validator";
import axios from "axios";

/**
 * Initializes form validation and submission handling for all forms with the class "js-form".
 *
 * This function:
 * - Selects all forms with the class "js-form".
 * - Initializes a Validator instance for each form.
 * - Sets up an AbortController for managing request cancellation.
 * - Disables the submit button during form submission.
 * - Validates the form on submission.
 * - Sends the form data using an Axios POST request if the form is valid.
 * - Handles the response, showing a success modal if the form submission is successful.
 * - Resets the form and re-enables the submit button after submission.
 *
 * @remarks
 * The function assumes that the `Validator` class and `axios` library are available in the scope.
 *
 * @example
 * ```typescript
 * import forms from './forms';
 *
 * document.addEventListener('DOMContentLoaded', () => {
 *   forms();
 * });
 * ```
 */
export default function forms() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();
    const submitBtn = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );

    const handleFormSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!formValidator || !form) return;
      formValidator.validate();

      console.log("Validated", formValidator.valid);

      if (formValidator.valid) {
        const formData = new FormData(form);
        if (submitBtn) submitBtn.disabled = true;
        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.status === "mail_sent") {
              const parentModal = form.closest<HTMLElement>(".js-modal");
              parentModal?.classList.remove("active");
              const modal =
                document.querySelector<HTMLElement>("#success-modal");
              if (modal) {
                modal.classList.add("active");
                document.body.classList.add("modal-open");

                setTimeout(() => {
                  if (modal.classList.contains("active")) {
                    modal.classList.remove("active");
                    document.body.classList.remove("modal-open");
                  }
                }, 4000);
              }
              if (form) {
                form.reset();
              }
            } else {
              console.log("Form not sent");
            }
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
