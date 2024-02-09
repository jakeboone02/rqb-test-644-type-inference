import {
  Field,
  FullField,
  QueryBuilder,
  ValueEditor,
  ValueEditorProps,
  ValueSelector,
  ValueSelectorProps,
  toFullOptionList,
} from "react-querybuilder";
import "./App.css";

type FieldNames = "firstName" | "lastName";

const fields: Field<FieldNames>[] = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
];

const VE = (props: ValueEditorProps<FullField>) => <ValueEditor {...props} />;

const FS = (props: ValueSelectorProps<FullField>) => (
  <ValueSelector {...props} />
);

function App() {
  // const [query, setQuery] = useState<RuleGroupType | undefined>();

  return (
    <div>
      <QueryBuilder
        fields={toFullOptionList(fields)}
        controlElements={{
          fieldSelector: FS,
          valueEditor: VE,
        }}
      />
    </div>
  );
}

export default App;
