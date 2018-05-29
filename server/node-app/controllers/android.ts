class Android {
  android(req: any, res: any) {
    res.download('files/app-debug.apk', 'app.apk')
  }
}
export default new Android().android
