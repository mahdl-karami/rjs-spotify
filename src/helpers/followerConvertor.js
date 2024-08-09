function followerConvertor(count) {
  const countSt = String(count);
  const length = countSt.length;

  if (length < 7) {
    return countSt.substring(0, length - 3) + "K";
  }
  if (7 < length < 10) {
    return countSt.substring(0, length - 6) + "M";
  }
}

export default followerConvertor;
