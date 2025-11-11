<?php

namespace App\Http\Requests\Store\Order;

use Illuminate\Foundation\Http\FormRequest;

class OrderDeliveryDetailsRequest extends FormRequest
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
    public function messages()
    {
        return [
            'zipCode.digits' => 'Kod pocztowy musi składać się z dokładnie 5 cyfr (np. 12345).',
            'zipCode.required' => 'Pole kod pocztowy jest wymagane.',
            'phone.regex' => 'Numer telefonu musi zawierać dokładnie 9 cyfr bez spacji i znaków specjalnych. (123123123)',
            "company.required_if" => "Pole nazwa firmy jest wymagane.",
            'nip.digits' => 'NIP musi składać się z dokładnie 10 cyfr bez spacji i znaków specjalnych.',
            'nip.required_if' => 'Pole NIP jest wymagane.',
            "companyAddressLine1.required_if" => "Adres firmy jest wymagane.",
            'companyZipCode.digits' => 'Kod pocztowy firmy musi składać się z dokładnie 5 cyfr (np. 12345).',
            'companyZipCode.required_if' => 'Pole kod pocztowy firmy jest wymagany.',
            "companyCity.required_if" => "Pole miasto jest wymagane.",
        ];

    }
    public function rules(): array
    {
        return [
            "name" => 'required',
            "surname" => 'required',
            "addressLine1" => 'required',
            "zipCode" => [
                'required',
                'digits:5',
            ],
            "city" => 'required|min:3',
            "phone" => [
                'required',
                'regex:/^[0-9]{9}$/'
            ],
            "company" => 'required_if:invoice,true',
            "nip" => [
                'nullable',
                'required_if:invoice,true',
                'digits:10',
            ],
            "companyAddressLine1" => "required_if:invoice,true",
            "companyZipCode" => [
                "nullable",
                "required_if:invoice,true",
                "digits:5",
            ],
            "companyCity" => "required_if:invoice,true",
        ];
    }
}
