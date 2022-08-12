type Tup = [{ name: string }, number, boolean];

interface OurFnType {
  (s: string): Tup;
}

const getThing: OurFnType = (str): Tup => {
  console.log(str);
  return [{ name: str }, 54, true];
};

type StrangeType = ReturnType<OurFnType>;

const strange: StrangeType = [{ name: 'Mike' }, 84, false];
