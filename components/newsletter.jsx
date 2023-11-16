import { BookIcon } from '@/assets';
import Button from './button';
import Input from './input';

export default function Newsletter() {
  return (
    <form className="grid gap-5 w-full">
      <Input name="firstName" placeholder="Your first name" />
      <Input name="lastName" placeholder="Your last name" />
      <Input name="email" type="email" placeholder="Your email" />
      <fieldset className="flex gap-5 justify-center">
        <input type="checkbox" name="newsletter" id="newsletter" />
        <label htmlFor="newsletter" className="text-xs">
          Get more insights on improving your developer marketing game.
        </label>
      </fieldset>
      <Button type="submit">
        <BookIcon />
        <div>Read a free chapter</div>
      </Button>
    </form>
  );
}
