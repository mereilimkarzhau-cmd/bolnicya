import { Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="bg-rose-50 pb-32 pt-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-display text-6xl font-semibold text-rose-300" aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title" className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
          Такой страницы нет
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          Возможно, адрес изменился или в ссылке опечатка. Вернитесь на главную, там есть всё нужное.
        </p>
        <ButtonLink href="/" variant="rose" size="lg" className="mt-8">
          <Home className="h-5 w-5" aria-hidden="true" />
          На главную
        </ButtonLink>
      </div>
    </section>
  );
}
