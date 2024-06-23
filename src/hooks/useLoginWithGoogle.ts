export default function useLoginWithGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
}
