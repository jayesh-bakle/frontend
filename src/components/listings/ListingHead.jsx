const ListingHead = ({
    imageSrc,
}) => {

    return (
        <>
            <div
                className=" w-full h-[60vh] overflow-hidden  rounded-xl relative"
            >
                <img
                    src={imageSrc}
                    className="object-cover w-full"
                    alt="Image"
                />
            </div>
        </>
    );
};

export default ListingHead;
