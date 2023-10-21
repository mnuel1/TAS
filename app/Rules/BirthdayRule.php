<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class BirthdayRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {        
        if (strtotime($value) >= time()) {
            // If the validation fails, use the $fail closure to add an error message.
            $fail("The $attribute must be a valid date in the past.");
        }
    }
}
