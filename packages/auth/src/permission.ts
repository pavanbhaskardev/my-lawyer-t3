import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  cases: ["create", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

const adminRole = ac.newRole({
  ...adminAc.statements,
  cases: ["create", "update", "delete"],
});

const lawyerRole = ac.newRole({
  user: [],
  session: [],
  cases: [],
});

const userRole = ac.newRole({
  user: [],
  session: [],
  cases: [],
});

export { adminRole, lawyerRole, userRole, ac };
