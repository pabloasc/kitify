import { NextLink } from '@site/utilities/deps';

export function HeroSection() {
  return (
    <section className="mx-auto max-w-2xl py-10 sm:py-2 lg:py-10">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          If you want to sell{' '}
          <a target="_blank" href="mailto:info@kitify.net" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Go here <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="logo.png" width="180" />
      </div>
      <div className="flex justify-center">
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A curated selection of the best football jerseys out there.
        </p>
      </div>
    </section>
  );
}
