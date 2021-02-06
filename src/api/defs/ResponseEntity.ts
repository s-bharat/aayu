/* tslint:disable:max-line-length */
/**
 * Part Number Management System. More on: http://example.com/pnms-api
 * 0.0.1-SNAPSHOT
 * PNMS
 * Please read on https://example.com/terms-of-service
 * Example LLC
 * http://localhost:8081
 * contact@test.com
 * Apache License v2.0
 * https://www.apache.org/licenses/LICENSE-2.0.html
 * undefined
 */

export interface ResponseEntity {
  headers?: {[key: string]: string[]};
  body?: object;
  statusCode?: StatusCodeResponseEntityEnum;
  /** format: int32 */
  statusCodeValue?: number;
}

export type StatusCodeResponseEntityEnum =
  'CONTINUE' |
  'SWITCHING_PROTOCOLS' |
  'PROCESSING' |
  'CHECKPOINT' |
  'OK' |
  'CREATED' |
  'ACCEPTED' |
  'NON_AUTHORITATIVE_INFORMATION' |
  'NO_CONTENT' |
  'RESET_CONTENT' |
  'PARTIAL_CONTENT' |
  'MULTI_STATUS' |
  'ALREADY_REPORTED' |
  'IM_USED' |
  'MULTIPLE_CHOICES' |
  'MOVED_PERMANENTLY' |
  'FOUND' |
  'MOVED_TEMPORARILY' |
  'SEE_OTHER' |
  'NOT_MODIFIED' |
  'USE_PROXY' |
  'TEMPORARY_REDIRECT' |
  'PERMANENT_REDIRECT' |
  'BAD_REQUEST' |
  'UNAUTHORIZED' |
  'PAYMENT_REQUIRED' |
  'FORBIDDEN' |
  'NOT_FOUND' |
  'METHOD_NOT_ALLOWED' |
  'NOT_ACCEPTABLE' |
  'PROXY_AUTHENTICATION_REQUIRED' |
  'REQUEST_TIMEOUT' |
  'CONFLICT' |
  'GONE' |
  'LENGTH_REQUIRED' |
  'PRECONDITION_FAILED' |
  'PAYLOAD_TOO_LARGE' |
  'REQUEST_ENTITY_TOO_LARGE' |
  'URI_TOO_LONG' |
  'REQUEST_URI_TOO_LONG' |
  'UNSUPPORTED_MEDIA_TYPE' |
  'REQUESTED_RANGE_NOT_SATISFIABLE' |
  'EXPECTATION_FAILED' |
  'I_AM_A_TEAPOT' |
  'INSUFFICIENT_SPACE_ON_RESOURCE' |
  'METHOD_FAILURE' |
  'DESTINATION_LOCKED' |
  'UNPROCESSABLE_ENTITY' |
  'LOCKED' |
  'FAILED_DEPENDENCY' |
  'UPGRADE_REQUIRED' |
  'PRECONDITION_REQUIRED' |
  'TOO_MANY_REQUESTS' |
  'REQUEST_HEADER_FIELDS_TOO_LARGE' |
  'UNAVAILABLE_FOR_LEGAL_REASONS' |
  'INTERNAL_SERVER_ERROR' |
  'NOT_IMPLEMENTED' |
  'BAD_GATEWAY' |
  'SERVICE_UNAVAILABLE' |
  'GATEWAY_TIMEOUT' |
  'HTTP_VERSION_NOT_SUPPORTED' |
  'VARIANT_ALSO_NEGOTIATES' |
  'INSUFFICIENT_STORAGE' |
  'LOOP_DETECTED' |
  'BANDWIDTH_LIMIT_EXCEEDED' |
  'NOT_EXTENDED' |
  'NETWORK_AUTHENTICATION_REQUIRED';
