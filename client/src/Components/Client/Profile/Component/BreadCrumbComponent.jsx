import React from 'react'

function BreadCrumbComponent({title}) {
  return (
    <nav
    class="relative flex flex-wrap items-center justify-between py-3 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <nav class="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
        <ol class="list-reset flex">
          <li>
            <a
              href="#"
              class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
            >
              Home
            </a>
          </li>
          <li>
            <span class="mx-2 text-neutral-500 dark:text-neutral-200">
              /
            </span>
          </li>
          <li>
            <a
              href="#"
              class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
            >
              Account
            </a>
          </li>
          <li>
            <span class="mx-2 text-neutral-500 dark:text-neutral-200">
              /
            </span>
          </li>
          <li>
            <a
              href="#"
              class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
            >
             {title}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </nav>
  )
}

export default BreadCrumbComponent