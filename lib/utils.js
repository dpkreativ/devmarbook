'use server';

import { revalidatePath } from 'next/cache';

export async function convertkit(prevState, formData) {
  const email = formData.get('email');
  const firstName = formData.get('firstName');

  if (!email) {
    // Tell developers when they are missing params
    return { message: 'No email address provided.' };
  }

  const api_key = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!api_key || !formId) {
    // Don't tell people about internal server errors
    return { message: 'internal server error' };
  }

  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const tags = [4278401];

  try {
    const body = JSON.stringify({ api_key, email, tags });

    // POST a request to the ConvertKit endpoint
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body,
      redirect: 'follow',
    });

    revalidatePath('/');

    // Send a non-descriptive success response
    return { message: 'successful', user: { firstName } };
  } catch (e) {
    // Don't tell people about internal server errors
    return {
      message: 'internal server error',
    };
  }
}
