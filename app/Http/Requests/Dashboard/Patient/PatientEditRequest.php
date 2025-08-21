<?php

namespace App\Http\Requests\Dashboard\Patient;

use Illuminate\Foundation\Http\FormRequest;

class PatientEditRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "fullName" => "required|string",
            "phone" => "digits:9|nullable",
            "email" => "email|string|nullable",
            "birthdate" => "required|date|nullable",
            "gender" => 'required|in:male,female',
        ];
    }
}
