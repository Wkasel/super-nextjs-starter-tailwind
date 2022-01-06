import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Accordion = () => (
  <Disclosure as="div">
    {({ open }) => (
      <>
        <dt className="text-lg">
          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
            <span className="font-medium text-gray-900">{'Test'}</span>
            <span className="ml-6 h-7 flex items-center">
              <ChevronDownIcon
                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                aria-hidden="true"
              />
            </span>
          </Disclosure.Button>
        </dt>

        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0">
          <Disclosure.Panel static className="overflow-auto transition-max-height duration-700 ease-in-out">
            <div className="pb-10">
              <h1>Do That thing</h1>
            </div>
          </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
);
