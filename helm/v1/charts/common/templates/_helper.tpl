{{- define "common.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}


{{- define "common.fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{ $name }}
{{- end -}}


{{- define "common.selectorLabels" -}}
app.kubernetes.io/name: {{ include "common.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}


{{- define "common.configMap" -}}
{{- range $key, $value := .Values.configs }}
    {{ $key }}: {{ $value | quote }}
{{- end }}
{{- end -}}


{{- define "common.secretsMap" -}}
{{- range $key, $value := .Values.secrets }}
    {{ $key }}: {{ $value | quote }}
{{- end }}
{{- end -}}