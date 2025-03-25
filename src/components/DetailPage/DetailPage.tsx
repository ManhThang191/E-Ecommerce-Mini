import React from 'react'

interface DetailPageProps {
  name: string;
}

function DetailPage({ name }: DetailPageProps) {
  return (
    <div className="bg-cyan-900 text-white p-4 rounded-md m-4 "><h1>{name}</h1></div>
)
}

export default DetailPage