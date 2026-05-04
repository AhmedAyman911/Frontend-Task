import Image from "next/image";

export default function PhotoCard() {
    return (
        <div
            className="card border-0 rounded-5 overflow-hidden shadow-md w-100"
            style={{ height: "150px" }}
        >
            <Image
                src="/shoes.jpg"
                alt="card"
                fill
                style={{ objectFit: "cover" }}
                loading="eager"
            />
            <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3">
                <h4 className="text-white fw-semibold mb-0">
                    Sharpen your skill with
                </h4>

                <h4 className="text-white fw-semibold mb-2">
                    Professional Online
                </h4>

                <button className="btn btn-dark rounded-4 px-3 py-2 align-self-start">
                    Upgrade Now
                </button>
            </div>
        </div>
    )
}