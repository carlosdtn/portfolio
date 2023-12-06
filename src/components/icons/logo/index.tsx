export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="778"
      height="899"
      fill="none"
      viewBox="0 0 778 899"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--cd-purple))' }} />
          <stop
            offset="50%"
            style={{ stopColor: 'hsl(var(--cd-light-blue))' }}
          />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--cd-preview))' }} />
        </linearGradient>
      </defs>
      <path
        className="group-hover:fill-[url(#gradient)] fill-cd-gray transition duration-300 ease-in-out"
        d="M338.503 366.422l-50.496-29.175v-168.49l-140.364 87.391-100.994-58.35 46.65-26.952L389 0l342.351 197.798-100.993 58.35-140.365-87.392v168.491l-50.496 29.175L389 395.597zM778 379.235L389 593.879 194.5 486.557l-93.507-51.595v161.705l93.507 51.595 97.25 53.661 97.25 53.66 194.5-107.321L778 540.94v133.31L389 899 100.993 732.6 0 674.25v-449.5l100.993 58.35L389 449.5l389-224.75z"
      ></path>
    </svg>
  );
}
