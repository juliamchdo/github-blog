import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchIssueFormSchema = z.object({
  query: z.string(),
});

type SearchIssueFormData = Zod.infer<typeof SearchIssueFormSchema>;

export function SearchForm() {
  const { register } = useForm<SearchIssueFormData>({
    resolver: zodResolver(SearchIssueFormSchema),
  });

  return (
    <SearchFormContainer>
      <input {...register("query")} type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
