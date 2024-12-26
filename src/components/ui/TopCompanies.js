import React from "react";

const companies = ["Google", "Microsoft", "Amazon", "Facebook", "Apple"];

function TopCompanies() {
  return (
    <main className="relative w-[95%] mx-auto min-h-[600px] border-t border-gray-500 flex flex-col justify-center bg-slate-100 overflow-hidden">
      <div className="text-center max-w-xl mx-auto mt-28">
                <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-200">We have Client From All Over World</h1>
            </div>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center">

          <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
             
              <li>
                <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
              </li>
              <li>
                <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
              </li>
              <li>
                <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
              </li>
              <li>
                <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
              </li>
              <li>
                <img class="mx-4 inline h-16" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
              </li>
              

            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}

export default TopCompanies;
