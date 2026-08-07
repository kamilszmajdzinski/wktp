import logoUrl from "../../imports/wktp-logo.jpg";

// Club logo (white dancing couple + wordmark on a black background).
// Because the source image has a solid black background, place it on a dark
// surface or inside a black tile so the edges blend cleanly.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Wielkopolski Klub Tańców Polskich"
      className={className}
    />
  );
}
