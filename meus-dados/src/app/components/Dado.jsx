"use client";

export default function Dado({ valor }) {
    function getImagem() {
        return `/dados/dado${valor}.png`;
    }

    return (
        <div>
            <img src={getImagem()} alt={`Dado ${valor}`} width={80} />
        </div>
    );
}