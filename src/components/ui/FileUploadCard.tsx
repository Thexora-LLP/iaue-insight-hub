import React, { useRef, useState } from 'react';
import { Upload, CheckCircle, X } from 'lucide-react';

/* Simple Card primitives */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>{children}</h3>
);

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

type FileUploadCardProps = {
  title?: string;
  icon?: React.ElementType;
  maxSize?: number; // MB
  acceptedTypes?: string[];
  multiple?: boolean;
  description?: string;
  note?: string;
  className?: string;
  onFileUpload?: (files: File[]) => void;
  onFileRemove?: (files: File[]) => void;
};

const FileUploadCard: React.FC<FileUploadCardProps> = ({
  title = "Additional Files (Optional)",
  icon: Icon = Upload,
  maxSize = 50,
  acceptedTypes = ['pdf', 'doc', 'docx', 'txt', 'rtf', 'odt'],
  multiple = true,
  description = "Upload figures, datasets, or supplementary materials",
  note,
  onFileUpload,
  onFileRemove,
  className = ""
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const noteText = note ?? (multiple ? `Multiple files accepted (max ${maxSize}MB total)` : `Single file (max ${maxSize}MB)`);

  // Common mime mapping
  const mimeTypes: Record<string, string> = {
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    txt: 'text/plain',
    rtf: 'application/rtf',
    odt: 'application/vnd.oasis.opendocument.text',
    csv: 'text/csv',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    bmp: 'image/bmp',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    json: 'application/json'
  };

  const acceptAttr = acceptedTypes.map(t => (t.startsWith('.') ? t : `.${t}`)).join(',');

  const supportedMimeTypes = acceptedTypes
    .map(type => mimeTypes[type.toLowerCase()])
    .filter(Boolean);

  const getTotalSize = (fileList: File[]) => fileList.reduce((acc, f) => acc + f.size, 0);
  const maxBytes = maxSize * 1024 * 1024;

  const extFromName = (name: string): string => {
    const parts = name.split('.');
    return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
  };

  const fileIsAccepted = (file: File): boolean => {
    if (file.type && supportedMimeTypes.includes(file.type)) return true;
    const ext = extFromName(file.name);
    return acceptedTypes.map(a => a.toLowerCase()).includes(ext);
  };

  const validateFiles = (incomingFilesArray: FileList | File[]): File[] => {
    const incoming = Array.from(incomingFilesArray);
    const invalidFiles: string[] = [];
    const tooLargeFiles: string[] = [];
    const accepted: File[] = [];

    let remainingBytes = Math.max(0, maxBytes - getTotalSize(files));

    for (const f of incoming) {
      if (!fileIsAccepted(f)) {
        invalidFiles.push(f.name);
        continue;
      }
      if (f.size > remainingBytes) {
        tooLargeFiles.push(f.name);
        continue;
      }
      accepted.push(f);
      remainingBytes -= f.size;
      if (!multiple) break;
    }

    if (invalidFiles.length) {
      window.alert(`These file types are not supported: ${invalidFiles.join(', ')}\nSupported: ${acceptedTypes.join(', ').toUpperCase()}`);
    }
    if (tooLargeFiles.length) {
      window.alert(`These files would exceed the total size limit (${maxSize}MB): ${tooLargeFiles.join(', ')}`);
    }

    return accepted;
  };

  const handleFileUpload = (fileList: FileList | File[]) => {
    if (!fileList || fileList.length === 0) return;

    if (!multiple) {
      const first = Array.from(fileList)[0];
      if (!fileIsAccepted(first)) {
        window.alert(`Unsupported file type. Supported: ${acceptedTypes.join(', ').toUpperCase()}`);
        return;
      }
      if (first.size > maxBytes) {
        window.alert(`File size must be less than ${maxSize}MB`);
        return;
      }
      const newFiles = [first];
      setFiles(newFiles);
      onFileUpload?.(newFiles);
      return;
    }

    const accepted = validateFiles(fileList);
    if (accepted.length === 0) return;

    const updated = [...files, ...accepted];
    setFiles(updated);
    onFileUpload?.(updated);
  };

  const handleSelectClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileUpload(e.target.files);
      e.target.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const dropped = e.dataTransfer.files;
    if (!dropped || dropped.length === 0) return;
    if (!multiple) {
      handleFileUpload([dropped[0]]);
    } else {
      handleFileUpload(dropped);
    }
  };

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFileRemove?.(updated);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const totalUsedMB = (getTotalSize(files) / 1024 / 1024).toFixed(2);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={acceptAttr}
          onChange={handleInputChange}
        />

        <div
          role="button"
          tabIndex={0}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
            ${dragActive
              ? 'border-blue-400 bg-blue-50'
              : files.length > 0
                ? 'border-green-400 bg-green-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
          onClick={handleSelectClick}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSelectClick(); }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {files.length > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-12 w-12 mr-3 text-green-600" />
                <div className="text-left">
                  <p className="text-sm font-medium text-green-800">{files.length} file{files.length > 1 ? 's' : ''} uploaded</p>
                  <p className="text-xs text-green-600">Using {totalUsedMB}MB of {maxSize}MB</p>
                </div>
              </div>

              <ul className="text-left space-y-2 mt-4 max-h-44 overflow-auto">
                {files.map((file, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 text-sm bg-white/60 p-2 rounded">
                    <div className="truncate max-w-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{file.name}</span>
                        <span className="text-xs text-gray-500">• {formatFileSize(file.size)}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                    >
                      <X className="h-3 w-3" />
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              {dragActive ? (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 mx-auto text-blue-600" />
                  <p className="text-sm font-medium text-blue-800">Drop your {multiple ? 'files' : 'file'} here</p>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-sm font-medium text-gray-900 mb-1">{description}</p>
                  <p className="text-xs text-gray-500">{noteText}</p>
                  <p className="text-xs text-muted-foreground mt-2">{acceptedTypes.map(t => t.toUpperCase()).join(', ')}</p>
                </>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploadCard;
