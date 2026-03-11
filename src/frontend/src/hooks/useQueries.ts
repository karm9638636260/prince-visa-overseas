import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      fullName: string;
      email: string;
      phoneNumber: string;
      destinationCountry: string;
      visaType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Service unavailable. Please try again.");
      return actor.submitInquiry(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.destinationCountry,
        data.visaType,
        data.message,
      );
    },
  });
}
