

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: '#CDCED2',
    borderWidth: 1,
  },
  postHeader: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#CDCED2',
    minHeight: 78
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 10,
    marginRight: 10,
  },
  username: {
    fontFamily: 'GT Walsheim Pro',
    fontWeight: "bold",
    fontSize: 14,
    color: '#070A1C'
  },
  postBody: {
    marginTop: 16,
    paddingHorizontal: 16
  },
  text:{
    fontFamily: 'GT Walsheim Pro',
    fontSize: 14,
    color: '#070A1C'
  },
  hashtags: {
    fontFamily: 'GT Walsheim Pro',
    color: "#543C52",
    fontSize: 14,
  },
  postFooter: {
    flexDirection: "row",
    gap: 24,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  footerText: {
    fontSize: 14,
    color: "#070A1C",
  },
  dotsIcon:{
    position: 'relative',
    left: 240,
    bottom: 15
  },
  imageGrid: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageHalf: {
    width: '48%',
    aspectRatio: 3 / 4,
    borderRadius: 12,
  },
  imageThird: {
    width: '31%',
    aspectRatio: 3 / 4,
    borderRadius: 12,
  },
});