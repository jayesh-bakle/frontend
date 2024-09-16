"use client";

import React from "react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import ListingHead from "./ListingHead";
import ListingCuisine from "./ListingCuisine";

const ListingHero = ({ listing }) => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto pt-24">
        <div className="flex flex-col gap-8">
          {/* Listing Image Header */}
          <ListingHead imageSrc={listing?.imageUrl} />

          {/* Listing Title */}
          <div className="text-4xl font-bold text-gray-900 flex justify-between items-center mb-6">
            <div>{listing?.name}</div>
            <div className="text-lg font-light text-gray-500">
              Restaurant ID: {listing?.restaurantId}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-row gap-6 text-lg font-light text-blue-600 mb-6">
            <Link
              to={listing?.bookUrl}
              target="_blank"
              className="hover:text-blue-800 transition"
            >
              Book Restaurant
            </Link>
            <Link
              to={listing?.photosUrl}
              target="_blank"
              className="hover:text-blue-800 transition"
            >
              See Photos
            </Link>
            <Link
              to={listing?.menuUrl}
              target="_blank"
              className="hover:text-blue-800 transition"
            >
              See Menu
            </Link>
          </div>

          {/* Restaurant Information in Table Format */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-left text-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Attribute</th>
                  <th className="border border-gray-300 px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Name
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{listing?.name}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Country
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {listing?.location?.country_id?.countryName}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    City
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {listing?.location?.city}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Average Cost for Two
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {listing?.currency} {listing?.average_cost_for_two}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">
                    Cuisines
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <ListingCuisine data={listing} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingHero;
