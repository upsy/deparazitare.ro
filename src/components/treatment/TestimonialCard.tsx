import { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

const typeBadge = {
  clinical: {
    label: "Studiu clinic",
    className: "bg-sky-100 text-sky-800 border-sky-200",
  },
  personal: {
    label: "Experiență personală",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
} as const;

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const badge = typeBadge[testimonial.type];

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base font-bold text-stone-900 leading-snug">
          {testimonial.summary}
        </h3>
        <span
          className={cn(
            "shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
            badge.className
          )}
        >
          {badge.label}
        </span>
      </div>

      <p className="text-sm text-stone-600 mb-3">{testimonial.details}</p>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-3">
        <span className="text-stone-500">
          <span className="font-medium text-stone-700">Rezultat:</span>{" "}
          {testimonial.outcome}
        </span>
        {testimonial.duration && (
          <span className="text-stone-500">
            <span className="font-medium text-stone-700">Durată:</span>{" "}
            {testimonial.duration}
          </span>
        )}
        {testimonial.year && (
          <span className="text-stone-500">
            <span className="font-medium text-stone-700">An:</span>{" "}
            {testimonial.year}
          </span>
        )}
      </div>

      <div className="text-xs text-stone-500">
        <span className="font-medium">Sursă:</span>{" "}
        {testimonial.sourceUrl ? (
          <a
            href={testimonial.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {testimonial.source}
          </a>
        ) : (
          testimonial.source
        )}
      </div>

      {testimonial.disclaimer && (
        <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-3">
          <p className="text-xs text-amber-700">{testimonial.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
