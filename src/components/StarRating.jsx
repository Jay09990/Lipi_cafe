export default function StarRating({ count = 5 }) {
    return (
        <span className="text-wood tracking-[2px] text-sm">
            {"★".repeat(count)}
        </span>
    );
}
