"use client";
import { useFormState, useFormStatus } from "react-dom";
import { BookIcon, SpinnerIcon } from "@/assets";
import Button from "./button";
import Input from "./input";
import AnimatedText from "./animated-text";
import { saveToConvertkit } from "@/lib/actions";

export default function Newsletter() {
  const [state, formAction] = useFormState(saveToConvertkit, {});

  return state?.message === "successful" ? (
    <div className="grid gap-5">
      <AnimatedText
        text={`Successful!`}
        el={`h3`}
        className="font-extrabold text-5xl lg:text-7xl drop-shadow-sm"
      />

      <p>
        Thanks, {state.user.firstName}. Please check your email for the free
        chapter.
      </p>
    </div>
  ) : (
    <form className="grid gap-5 w-full" action={formAction}>
      <Input name="firstName" placeholder="Your first name" />
      <Input name="lastName" placeholder="Your last name" />
      <Input name="email" type="email" placeholder="Your email" />
      <fieldset className="flex gap-5 justify-center">
        <input type="checkbox" name="newsletter" id="newsletter" />
        <label htmlFor="newsletter" className="text-xs">
          Get more insights on improving your developer marketing game.
        </label>
      </fieldset>
      <div className="w-max mx-auto">
        <Submit />
      </div>
    </form>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button secondary type="submit" disabled={pending}>
      {pending ? (
        <>
          <SpinnerIcon />
          <div>Sending...</div>
        </>
      ) : (
        <>
          <BookIcon />
          <div>Read a free chapter</div>
        </>
      )}
    </Button>
  );
}
