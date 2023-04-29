import React from "react";
import ListingDataComponent from "./ListingDataComponent";

function ListEventComponent({ event }) {
  
  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Event name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      View
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Bookings
                    </th>
                  </tr>
                </thead>
                <ListingDataComponent event={event}/>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEventComponent;
