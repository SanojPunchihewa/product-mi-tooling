package org.wso2.micro.integrator.dashboard.backend.rest.model;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.*;
import javax.validation.Valid;


import io.swagger.annotations.*;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;


public class MessageStoreListInner   {
  private @Valid String storeName = null;
  private @Valid List<Object> nodes = new ArrayList<Object>();

  /**
   **/
  public MessageStoreListInner storeName(String storeName) {
    this.storeName = storeName;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("storeName")

  public String getStoreName() {
    return storeName;
  }
  public void setStoreName(String storeName) {
    this.storeName = storeName;
  }

  /**
   **/
  public MessageStoreListInner nodes(List<Object> nodes) {
    this.nodes = nodes;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("nodes")

  public List<Object> getNodes() {
    return nodes;
  }
  public void setNodes(List<Object> nodes) {
    this.nodes = nodes;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MessageStoreListInner messageStoreListInner = (MessageStoreListInner) o;
    return Objects.equals(storeName, messageStoreListInner.storeName) &&
        Objects.equals(nodes, messageStoreListInner.nodes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(storeName, nodes);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MessageStoreListInner {\n");
    
    sb.append("    storeName: ").append(toIndentedString(storeName)).append("\n");
    sb.append("    nodes: ").append(toIndentedString(nodes)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
