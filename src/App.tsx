import {
  Field,
  FullField,
  QueryBuilder,
  RuleGroupType,
  RuleType,
  ValueEditor,
  ValueEditorProps,
  ValueSelector,
  ValueSelectorProps,
} from "react-querybuilder";
import "./App.css";
import { useCallback, useState } from "react";

type FieldNames = "firstName" | "lastName";

const fields: Field<FieldNames>[] = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
];

const valueEditor = (props: ValueEditorProps<FullField<FieldNames>>) => (
  <ValueEditor {...props} />
);

const fieldSelector = (props: ValueSelectorProps<FullField<FieldNames>>) => (
  <ValueSelector {...props} />
);

const defaultQuery: RuleGroupType<RuleType<FieldNames>> = {
  combinator: "and",
  rules: [{ field: "firstName", operator: "beginsWith", value: "Steve" }],
};

function App() {
  const [, setQuery] = useState<
    RuleGroupType<RuleType<FieldNames>> | undefined
  >();
  const updateQuery = useCallback(
    (q: RuleGroupType<RuleType<FieldNames>>) => setQuery(q),
    []
  );

  return (
    <div>
      <QueryBuilder
        fields={fields}
        defaultQuery={defaultQuery}
        onQueryChange={updateQuery}
        controlElements={{
          fieldSelector,
          valueEditor,
        }}
      />
      <QueryBuilder
        fields={fields}
        defaultQuery={defaultQuery}
        onQueryChange={updateQuery}
        controlElements={{
          fieldSelector: (props: ValueSelectorProps<FullField<FieldNames>>) => (
            <ValueSelector {...props} />
          ),
          valueEditor: (props: ValueEditorProps<FullField<FieldNames>>) => (
            <ValueEditor {...props} />
          ),
        }}
      />
    </div>
  );
}

export default App;
