"use client"
import properties from "@/properties.json"
import { PropertyCard } from "../../components/PropertyCard";

interface Location {
  street: string,
  city: string,
  state: string,
  zipcode: string
}

interface Rates {
  nightly?: number,
  weekly?: number
  monthly?: number,
}

interface SellerInfo {
  name: string,
  email: string,
  phone: string
}

export interface Listing {
  _id: string,
  owner: string,
  name: string,
  type: string,
  description: string,
  location: Location,
  beds: number,
  baths: number,
  square_feet: number,
  amenities: string[]
  rates: Rates,
  seller_info: SellerInfo,
  images: string[],
  is_featured: boolean,
  createdAt: string,
  updatedAt: string
}

export default function Properties() {
  const listing: Listing[] = properties
  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {
            listing.length === 0 ? (
              <p>No properties found</p>
            ) : null
          }

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              listing.map((property: Listing) => {
                const { _id, ...rest } = property;
                return (<PropertyCard listing={property} />)
              }
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
}
