export class Attachment {
    public id: number;
    public name: string;
    public isOffline: boolean = false;
    public isDownloading: boolean = false;
    public localUrl: string;
    public onlineUrl: string;
    public mimeType: string;
    public downloadProgress: number = 0;
    public offlineFileName: string;
    public isVideo: boolean = true;
    public downloadPermission: number
}