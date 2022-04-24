//if a component is wrapped by other component, it can be accessed by props.children
export const RoleWrapper = ({children, rolesAllowed, currentRole}) => {
    if (rolesAllowed.includes(currentRole)) {
        return children
    } else {
        return null
    }
}