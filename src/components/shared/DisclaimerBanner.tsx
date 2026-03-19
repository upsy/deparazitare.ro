import { cn } from "@/lib/utils";

export default function DisclaimerBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800",
        className
      )}
    >
      <p className="font-medium">
        ⚠️ Acest site are caracter exclusiv informativ și educațional. Nu
        înlocuiește consultul medical.
      </p>
      <p className="mt-1 text-amber-700">
        Niciun tratament nu trebuie început fără confirmarea diagnosticului de
        către un medic. Pentru copii și femei care alăptează, orice intervenție
        necesită avizul medicului.
      </p>
    </div>
  );
}
