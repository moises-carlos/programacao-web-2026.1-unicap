"use client";

export default function Dado({ valor }) {
    if (!valor) return <p>--</p>;

    return (
        <img
            src={`/dados/dado${valor}.png`}
            alt={`Dado ${valor}`}
            width={70}
        />
    );
}